'use client'
import React from "react";
import signUp from "@/firebase/auth/signup";
import {useRouter} from 'next/navigation'
import {Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Typography, Input} from "@material-tailwind/react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Google, User} from "iconsax-react";


function Page() {
    const router = useRouter()

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
    });

    const {
        register,
        setError,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm({resolver: yupResolver(schema)})


    const onSubmit = async ({email, password}) => {
        const {result, error} = await signUp(email, password);
        if (error) {
            setError('email', { type: 'custom', message: 'invalid credentials' })
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/admin")
    }

    return (
        <section className={'mt-20 flex flex-row justify-center'}>
            <Card className="w-96">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CardHeader
                        variant="gradient"
                        color="gray"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h5" color="white" className={'flex items-center gap-3 justify-center align-middle'}>
                            <User variant={'Bulk'}/> Create Account
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <div>
                            <Input {...register("email", {required: true})} label="Email" size="lg"
                                   error={errors.email}/>
                            {errors.email && (<Typography variant="small" color="red"
                                                          className="mt-2 flex items-center gap-1 font-normal">{errors.email.message}</Typography>)}
                        </div>
                        <div>
                            <Input {...register("password", {required: true})} label="password" size="lg"
                                   error={errors.password}/>
                            {errors.password && (<Typography variant="small" color="red"
                                                             className="mt-2 flex items-center gap-1 font-normal">{errors.password.message}</Typography>)}
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0 gap-3 grid">
                        <Button type={'submit'} color={'amber'} variant="gradient" fullWidth>
                            Let's Play
                        </Button>
                        <Button className={'flex items-center gap-3 justify-center'} variant="outlined" fullWidth>
                            <Google className={'w-5 h-5'}/>
                            Login With Google
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </section>

    );
}

export default Page;