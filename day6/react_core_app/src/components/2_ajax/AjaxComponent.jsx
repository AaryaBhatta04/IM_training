import { useEffect, useState } from "react";
import postApiClient from "../../services/post_api_client";
import DataTable from '../common/DataTable';
import LoaderAnimation from "../common/LoaderAnimation";

const AjaxComponent = () => {
    const [cState, setCState] = useState({
        posts: [],
        message: "Loading data, please wait....",
        flag: false
    });

    // useEffect(() => {
    //     postApiClient.getAllPostsUsingPromise().then(data => {
    //         setCState({
    //             posts: data,
    //             message: "",
    //             flag: true
    //         });
    //     }).catch(eMsg => {
    //         setCState({
    //             posts: [],
    //             message: eMsg,
    //             flag: true
    //         });
    //     });
    // }, []);

    const fetchData = async () => {
        try {
            const data = await postApiClient.getAllPostsAsync();
            setCState({
                posts: data,
                message: "",
                flag: true
            });
        } catch (eMsg) {
            setCState({
                message: eMsg,
                flag: true
            });
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="row mt-5">
                <h4 className="text-warning text-center text-uppercase font-weight-bold">{cState.message}</h4>
            </div>

            {
                !cState.flag
                    ? <LoaderAnimation />
                    : (<DataTable items={cState.posts}>
                        <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
                    </DataTable>)
            }
        </>
    );
};

export default AjaxComponent;