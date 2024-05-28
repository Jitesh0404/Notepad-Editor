import { toast } from "react-toastify";

const ToastMessage = ({ message, type }) => {
  // Display the toast message based on the type
  switch (type) {
    case "success":
      toast[type](message);
      break;
    case "error":
      toast[type](message);
      break;
    default:
      toast[type](message);
  }
};

export default ToastMessage;
