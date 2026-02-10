interface IconButtonProps {
  icon: React.ReactNode;
}

const IconButton = ({ icon }: IconButtonProps) => {
  return (
    <div
      className="cursor-pointer 
        w-8 h-8 rounded-full
        flex items-center justify-center
        bg-white/10
        text-[--text-muted]
      "
    >
      {icon}
    </div>
  );
};

export default IconButton;
