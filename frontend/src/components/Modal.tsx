import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { doSignInWithGoogle } from '@/firebase/auth';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    width: '500px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

export default function TransitionsModal() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isSigning,setisSigning] = React.useState(false);

    const {userLoggedIn} = useAuth();

    const onGoogleSignIn = (e:React.MouseEvent<HTMLElement>) =>{
        e.preventDefault();
        if(!isSigning){
            setisSigning(true);
            doSignInWithGoogle().catch(err=>{
                console.log(err);
                setisSigning(false);
                if(userLoggedIn){
                    navigate('/');
                }
            });
        }
    }


    return (
        <div>
            <div onClick={handleOpen} className="landing_login_signup">Login / SignUp</div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Card className="w-full bg-neutral-900 border-none shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(255,255,255,0.05)] p-6">
                            <CardContent className="pt-6">
                                <Tabs defaultValue="login" className="w-full">
                                    <TabsList className="grid w-full grid-cols-2 bg-neutral-800">
                                        <TabsTrigger value="login">Login</TabsTrigger>
                                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="login" className="space-y-4">
                                        <h1 className="scroll-m-20 pt-5 text-3xl font-extrabold tracking-tight lg:text-3xl">
                                            Welcome Back

                                        </h1>
                                        <h1 className="scroll-m-20 pb-5 text-1xl font-extrabold tracking-tight lg:text-1xl">
                                            Ready to solve some questions

                                        </h1>
                                        <Button onClick={onGoogleSignIn} variant="outline" className="w-full mt-2 border-neutral-700">
                                            Continue with Google
                                        </Button>
                                    </TabsContent>

                                    <TabsContent value="signup" className="space-y-4">
                                        <h1 className="scroll-m-20 pt-5 text-3xl font-extrabold tracking-tight lg:text-3xl">
                                            New User?

                                        </h1>
                                        <h1 className="scroll-m-20 pb-5 text-1xl font-extrabold tracking-tight lg:text-1xl">
                                            Dive into the World of Crypto Rewards

                                        </h1>
                                        <Button variant="outline" onClick={onGoogleSignIn} className="w-full mt-2 border-neutral-700">
                                            Continue with Google
                                        </Button>
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}