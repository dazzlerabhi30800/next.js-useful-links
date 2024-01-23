import { useLinkContext } from "@/context/Appcontext";
import { PlusIcon } from "@heroicons/react/20/solid";
export default function AddButton() {
  const { handleAddLink } = useLinkContext();
  return (
    <button className="add--btn" onClick={handleAddLink}>
      <PlusIcon style={{width: "100%", height: "100%"}} />
    </button>
  );
}
