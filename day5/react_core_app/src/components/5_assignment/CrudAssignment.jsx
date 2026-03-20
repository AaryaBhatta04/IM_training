import { useCallback, useState } from "react";
import ConfirmModal from "../common/ConfirmModal";
import DataTable from "../common/DataTable";
import FormComponent from "./FormComponent";

const getNextId = (employees) => employees.length ? employees[employees.length - 1].id + 1 : 1;

const createEmptyEmployee = (employees) => ({
    id: getNextId(employees),
    name: '',
    designation: '',
    salary: 0
});

const CrudAssignment = () => {
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState(() => createEmptyEmployee([]));
    const [formDisabled, setFormDisabled] = useState(false);
    const [edit, setEdit] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [deleteCandidate, setDeleteCandidate] = useState(null);

    const changeEmployee = useCallback((e) => {
        const { name, value } = e.target;

        setEmployee((prev) => {
            const updated = { ...prev };
            if (name === 'id' || name === 'salary') {
                updated[name] = parseInt(value || '0', 10);
            } else {
                updated[name] = value;
            }
            return updated;
        });
    }, []);

    const resetEmployee = useCallback(() => {
        setEmployee((prevEmployee) => {
            return createEmptyEmployee(employees);
        });
        setEdit(false);
        setFormDisabled(false);
    }, [employees]);


    const saveEmployee = useCallback((data) => {
        setEmployees((prevEmployees) => {
            let updatedEmployees;
            const normalized = {
                ...data,
                id: parseInt(data.id, 10),
                salary: parseInt(data.salary, 10) || 0,
            };

            if (edit) {
                const idx = prevEmployees.findIndex(
                    (e) => e.id === normalized.id
                );
                if (idx !== -1) {
                    updatedEmployees = [...prevEmployees];
                    updatedEmployees[idx] = { ...normalized };
                } else {
                    updatedEmployees = [...prevEmployees, normalized];
                }
            } else {
                updatedEmployees = [...prevEmployees, normalized];
            }

            // After updating list, prepare fresh form
            const nextEmployee = createEmptyEmployee(updatedEmployees);
            setEmployee(nextEmployee);
            setEdit(false);
            setFormDisabled(false);

            return updatedEmployees;
        });
    }, [edit]);

    const selectEmployee = useCallback((item, allowEdit) => {
        setEmployee({ ...item });
        setFormDisabled(!allowEdit);
        setEdit(allowEdit);
    }, []);

    const removeEmployee = useCallback((id) => {
        setShowModal(true);
        setDeleteCandidate(id);
    }, []);

    const handleModalYes = useCallback(() => {
        setEmployees((prevEmployees) => {
            const updatedEmployees = prevEmployees.filter(
                (e) => e.id !== deleteCandidate
            );

            const nextEmployee = createEmptyEmployee(updatedEmployees);
            setEmployee(nextEmployee);
            setEdit(false);
            setFormDisabled(false);
            return updatedEmployees;
        });

        setShowModal(false);
        setDeleteCandidate(null);
    }, [deleteCandidate]);

    const handleModalNo = useCallback(() => {
        setShowModal(false);
        setDeleteCandidate(null);
        resetEmployee();
    }, [resetEmployee]);

    return (
        <>
            <FormComponent
                employee={employee}
                changeEmployee={changeEmployee}
                saveEmployee={saveEmployee}
                resetEmployee={resetEmployee}
                disabled={formDisabled} />
            <hr />
            <DataTable items={employees} onSelect={selectEmployee} onDelete={removeEmployee}>
                <h5 className="text-primary text-uppercase font-weight-bold mb-3">
                    Employees Table
                </h5>
            </DataTable>
            <ConfirmModal
                show={showModal}
                title={"Delete Employee"}
                message={"Are you sure, you want to delete this record?"}
                handleYes={handleModalYes}
                handleNo={handleModalNo}
            />
        </>
    );
}

export default CrudAssignment;