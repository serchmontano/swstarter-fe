import { Typography } from '../atoms';

export const Header = () => {
  return (
    <header 
      className="w-full bg-white flex items-center justify-center py-4 shadow-[0_1px_0_0_#0ab463] md:shadow-[0_1px_0_0_#dadada]"
    >
      <Typography type="title" variant="secondary">SWStarter</Typography>
    </header>
  );
};
