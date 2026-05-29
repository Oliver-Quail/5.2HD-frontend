import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import VIEWS from "@/misc/VIEWS";
import { useState } from "react";
import { Link } from "react-router";


const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmail = (event :React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event :React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };



    return (
        <section className="w-full mx-auto">
            <Card className="mx-auto w-[400px] my-10">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            value={email}
                            onChange={handleEmail}
                            required
                        />
                        </div>
                        <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                        </div>
                        <Input id="password" type="password" required value={password} onChange={handlePassword} />
                        </div>
                    </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <CardAction>
                        <Button onClick={() => {
                            
                            let data = {
                                "email": email,
                                "password": password
                            }

                            fetch("/api/login", {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)}).then((response :Response) => {
                                if(response.status == 400) {
                                    alert("Invalid username or password");
                                }
                                
                                response.json().then((jsonData) => {
                                    console.log(jsonData);
                                    localStorage.setItem("token", jsonData["token"]);
                                    localStorage.setItem("name", jsonData["name"])
                                    console.log(localStorage.getItem("token"));
                                });
                            });
                        }}>Login</Button>
                        <Link to={VIEWS.SIGNUP}><Button variant="outline">Sign up</Button></Link>
                    </CardAction>
                </CardFooter>
            </Card>
        </section>
    )
}

export default Login;