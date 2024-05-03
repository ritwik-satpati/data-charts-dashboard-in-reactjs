import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const SidebarSectionItem = ({
  isActive = true,
  itemId,
  itemName,
  itemIcon,
  itemPath,
}) => {

  const navigate = useNavigate()
  const currentPath = useLocation().pathname

  const handleOnClick = () => {
    if (isActive) {
      toast.success(itemName);
      navigate(itemPath)
    } else {
      toast.error(itemName + " : No Permission !");
      // toast("No Permission !", {
      //   icon: "🚫",
      // });
    }
  };

  return (
    <>
      <button
        id={itemId}
        className={`${
          currentPath === itemPath
            ? `bg-blue-400 hover:bg-blue-500`
            : `bg-blue-100 hover:bg-blue-200`
        } w-full flex items-center justify-start space-x-2 font-Poppins text-start rounded-sm p-2 overflow-hidden`}
        onClick={handleOnClick}
      >
        <div className="aspect-square">{itemIcon}</div>
        <div className="font-Poppins">{itemName}</div>
      </button>
    </>
  );
};

export default SidebarSectionItem;
