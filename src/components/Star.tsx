import { FaStar } from "react-icons/fa";

interface StarProps {
  selected?: boolean;
  onSelect?: () => void;
}

export const Star = ({
  selected = false,
  onSelect = () => { /* do nothing */ }
}: StarProps) => {
  return (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
  )
}
