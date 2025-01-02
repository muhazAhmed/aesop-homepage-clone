import DefaultNavbar from "./DefaultNavbar";

const ExpandNavModal: React.FC<{
  toggleExpansion: () => void;
  isExpanded: boolean;
}> = ({ toggleExpansion, isExpanded }) => {
  return (
    <div className="fixed h-screen w-full flex flex-col top-0 z-[3000] bg-textPrimary">
      <DefaultNavbar
        toggleExpansion={toggleExpansion}
        isExpanded={isExpanded}
      />
      <div className="w-full border-b-[1px] border-footerBlack"></div>
      <div className=""></div>
    </div>
  );
};

export default ExpandNavModal;
