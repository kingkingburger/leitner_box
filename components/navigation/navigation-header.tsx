import TeamSwitcher from "@/components/team-switcher";
import { MainNav } from "@/components/main-nav";
import { Search } from "@/components/search";
import { UserNav } from "@/components/user-nav";
import { ModeToggle } from "@/components/navigation/mode-togle";

export const NavigationHeader = () => {
  return (
    <>
      {/*해더*/}
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <TeamSwitcher />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
};
