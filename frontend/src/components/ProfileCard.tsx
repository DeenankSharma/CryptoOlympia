import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/context/AuthContext"
import { doSignOut } from "@/firebase/auth";
import { useNavigate } from "react-router-dom";

export default function ProfileCard() {

    const navigate = useNavigate()
    const { currentUser } = useAuth();

    function toProfilePage() {
        navigate('/profile');
    }

    if (currentUser) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger className="dropdown-style">
                    Hi, {currentUser.displayName}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem className="dropdown-style" onClick={toProfilePage}>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="dropdown-style" onClick={doSignOut}>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    } else {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger className="dropdown-style">
                    Hi, Unable to fetch name
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel className="dropdown-style" onClick={toProfilePage}>
                        Profile
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="dropdown-style" onClick={doSignOut}>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }
    

}
