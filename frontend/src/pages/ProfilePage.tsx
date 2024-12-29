import { useAuth } from "@/context/AuthContext"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { RainbowButton } from "@/components/ui/rainbow-button"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function ProfilePage() {
    const { currentUser } = useAuth();


    const submittedBounties = [
        {
            id: "1",
            title: "Implement Smart Contract",
            reward: "2.5 ETH",
            status: "In Progress",
            description: "Created a smart contract for decentralized marketplace..."
        },
        {
            id: "2",
            title: "Fix Security Vulnerability",
            reward: "1.8 ETH",
            status: "Completed",
            description: "Identified and patched critical security issue in DeFi protocol..."
        }
    ];

    const earnedBounties = [
        {
            id: "1",
            title: "Optimize Gas Usage",
            reward: "3.2 ETH",
            date: "2024-01-15",
            description: "Successfully reduced gas consumption by 40% in main contract..."
        },
        {
            id: "2",
            title: "Bug Fix in Frontend",
            reward: "1.8 ETH",
            date: "2024-02-20",
            description: "Fixed critical UI bug affecting wallet connection..."
        }
    ];

    return (
        <div className="flex min-h-screen bg-background p-6 gap-6">
            
            <div className="w-[400px] fixed">
                <Card className="w-full">
                    <CardHeader >
                        <CardTitle className="for_font text-4xl text-center">Profile</CardTitle>
                        <CardDescription className="text-xl for_font text-center">Explore your Bounties and Attestations</CardDescription>
                    </CardHeader>
                    <CardContent className="p-3 space-y-4">
                        <div className="flex flex-col items-center space-y-10">
                            <Avatar style={{"height":"150px","width":"150px"}} className="h-50 w-50">
                                <AvatarImage src={currentUser?.photoURL || "https://github.com/shadcn.png"} />
                                <AvatarFallback>
                                    {currentUser?.displayName?.charAt(0) || "U"}
                                </AvatarFallback>
                            </Avatar>
                            <div className="text-center">
                                <h3 className="for_font text-2xl font-semibold">
                                    {currentUser?.displayName || "User Name"}
                                </h3>
                                <p className=" for_font text-lg text-muted-foreground">
                                    {currentUser?.email || "user@example.com"}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <RainbowButton className="for_font font-black text-xl">Rewards Earned: 5 ETH</RainbowButton>
                    </CardFooter>
                </Card>
            </div>

            
            <div className="ml-[450px] flex-1">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="for_font text-4xl text-center" >Activity Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="submitted" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 ">
                                <TabsTrigger className="p-0  for_font text-xl" value="submitted">Submitted Bounties</TabsTrigger>
                                <TabsTrigger className="p-0 for_font text-xl"  value="earned">Earned Bounties</TabsTrigger>
                            </TabsList>

                            <TabsContent value="submitted" className="mt-4">
                                <Accordion type="single" collapsible className="w-full">
                                    {submittedBounties.map((bounty) => (
                                        <AccordionItem key={bounty.id} value={bounty.id}>
                                            <AccordionTrigger>
                                                <div className="flex justify-between w-full pr-4">
                                                    <span className="for_font text-xl">{bounty.title}</span>
                                                    <span className="for_font text-xl text-muted-foreground">{bounty.reward}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="space-y-2">
                                                    <p className="for_font text-lg"><strong>Status:</strong> {bounty.status}</p>
                                                    <p className="for_font text-lg">{bounty.description}</p>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </TabsContent>

                            <TabsContent value="earned" className="mt-4">
                                <Accordion type="single" collapsible className="w-full">
                                    {earnedBounties.map((bounty) => (
                                        <AccordionItem key={bounty.id} value={bounty.id}>
                                            <AccordionTrigger>
                                                <div className="flex justify-between w-full pr-4">
                                                    <span className="for_font text-xl">{bounty.title}</span>
                                                    <span  className="for_font text-xl text-muted-foreground">{bounty.reward}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="space-y-2">
                                                    <p className="for_font text-lg"><strong>Completed:</strong> {bounty.date}</p>
                                                    <p className="for_font text-lg">{bounty.description}</p>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}