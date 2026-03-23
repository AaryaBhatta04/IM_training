import { Toast, ToastContainer } from 'react-bootstrap';

/**
 * Reusable Toast Notification Component
 *
 * @param {boolean} show - Controls visibility of the toast
 * @param {function} onClose - Callback when toast is closed
 * @param {string} message - Message to display in the toast
 * @param {string} type - Type of toast: 'success', 'danger', 'warning', 'info' (default: 'info')
 * @param {number} delay - Auto-hide delay in milliseconds (default: 4000)
 * @param {string} position - Position of toast container (default: 'top-end')
 */
const ToastNotification = ({
    show = false,
    onClose,
    message = '',
    type = 'info',
    delay = 4000,
    position = 'top-end',
    title = null
}) => {
    const getTitleByType = () => {
        if (title) return title;

        switch (type) {
            case 'success':
                return 'Success';
            case 'danger':
                return 'Error';
            case 'warning':
                return 'Warning';
            case 'info':
                return 'Information';
            default:
                return 'Notification';
        }
    };

    return (
        <ToastContainer position={position} className="p-3">
            <Toast
                show={show}
                onClose={onClose}
                delay={delay}
                autohide
                bg={type}
            >
                <Toast.Header>
                    <strong className="me-auto">{getTitleByType()}</strong>
                </Toast.Header>
                <Toast.Body className={type === 'warning' || type === 'info' ? '' : 'text-white'}>
                    {message}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default ToastNotification;
