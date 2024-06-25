import { React, useState } from 'react';
import { useForm } from 'react-hook-form';

//import { useNavigate } from "react-router-dom"

import { AppBar, Box, Button, Container, Link, Grid, Paper, IconButton, Typography, TextField } from '@mui/material';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Navigate } from 'react-router-dom';

export default function Signin(){
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [goodSignin, setGoodSignin] = useState(false);
    const [users, setUsers ] = useState([]);
    const [articles, setArticles ] = useState([]);

    const onFormSubmit = (formData) => {
        console.log(formData);

        //call api using fetch api

        fetch("http://localhost:3002/api/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'UserId': formData.Uid, 'Password': formData.Pwd})
        })
        .then((res) => res.json())
        .then((data) => { 
            console.log(data.token);  

            //set JWT token to local
            localStorage.setItem("token", data.token);  
            setGoodSignin(true);

            //redirect user to home page
            //window.location.href = 'http://localhost:3000/home';
        })
        .catch(err => console.log(err));
    }

    const getUsers = () => 
    {
        //call api using fetch api
        console.log("calling func <getUsers()>");

        const token = localStorage.getItem("token");

        fetch("http://localhost:3002/api/users", {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
        .then((res) => res.json())
        .then((data) => { 
            console.log(data[0].UserId);  
            console.log(data[0].Password); 
            setUsers(data);        
        });
    }

    const getArticles = () => 
    {
        //call api using fetch api
        console.log("calling func <getArticles()>");

        fetch("http://localhost:3002/api/articles", {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((data) => { 
            console.log(data[0].Title);  
            setArticles(data);        
        });
    }


    return (
        <>
        <Box height={300} />


        <form onSubmit={handleSubmit(onFormSubmit)} sx={{backgroundcolor:'lime', width:80}}>

            <Card sx={{minWidth:275}} variant='outlined'>

                <CardHeader title='User Infomation'/>
                <CardContent>

                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={2} />

                        <Grid item xs={12} sm={4}>
                            <Box textAlign="right" sx={{ pt:2}}>
                                <Typography>Username/Email: </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box textAlign="left" sx={{ pb:1}}>
                                <TextField id="uid" label='Username' variant='filled' {...register("Uid")}> </TextField>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={2} />
                    </Grid>

                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={2} />                        
                        <Grid item xs={12} sm={4}>
                            <Box textAlign="right" sx={{ pt:2}}>
                                <Typography>Password: </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                        <Box textAlign="left" sx={{ pb:1}}>
                            <TextField id="pwd" type="password" label='Password' variant='filled' {...register("Pwd")} > </TextField>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={2} />
                    </Grid>           


                    <Box sx={{p:2}}>
                        <Button id='button-signin' type="submit" color="primary" variant='contained' size="large">Login</Button>
                    </Box>

                    <Box sx={{p:2}}>
                        <a id='login-assistance' color="primary" variant='contained' href='/loginassistance'>Login Assistance</a>
                    </Box>
                </CardContent>

            </Card>

             </form>

        <Box textAlign="center">           
            
             <Box    
                display="flex"
                justifyContent="center"
                alignItems="center"
                >                   
                { goodSignin && 
                    <Button 
                        id='getusers'
                        color='info'
                        variant='contained'
                        size='medium'
                        value='getusers'
                        sx={{my:2, color: 'white', size: 'large', display:  'block'}}
                        onClick={()=>{getUsers()}}
                    > Get Users
                    </Button>
                }
            </Box>

            { goodSignin && 
                <Box    
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    >  
                    {users.map((user) => (
                        <ul>
                            <li>
                                {user.UserId}
                            </li>
                        </ul>
                    ))}
                </Box>
            }


            {/* <Box    
                display="flex"
                justifyContent="center"
                alignItems="center"
                >                 
                <Button 
                    id='getarticles'
                    color='info'
                    variant='contained'
                    size='medium'
                    value='getarticles'
                    sx={{my:2, color: 'white', size: 'large', display:  'block'}}
                    onClick={()=>{getArticles()}}
                    > Get Articles
                </Button>                
            </Box> */}

            <Box textAlign="center">

                {articles.map((article) => (
                    <Card sx={{minWidth:275}} variant='outlined'>
                        <CardHeader title={article.Title}/>
                        <CardContent>
                            <Box textAlign="center" sx={{ pt:2}}>
                                <Typography>{article.UpdatedOn} </Typography>
                            </Box>
                            <Box textAlign="center" sx={{ pt:2}}>
                                <Typography>{article.Content} </Typography>
                            </Box>                            
                        </CardContent>    
                    </Card>
                ))}
    
            </Box>
        </Box>  

        </>
    );
}