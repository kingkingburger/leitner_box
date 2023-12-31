import {LeftNav} from "@/components/left-nav";
import {Search} from "@/components/search";
import {UserNav} from "@/components/user-nav";
import {ModeToggle} from "@/components/navigation/mode-togle";
import {NavigationCreateCount} from "@/components/navigation/navigation-create-account";

export const MainHeader = () => {
  return (
    <>
      {/*해더*/}
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <LeftNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
            <NavigationCreateCount />
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
};
