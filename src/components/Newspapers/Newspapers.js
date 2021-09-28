import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspapers = () => {
    
    const [articles, setArticles] = useState([]);



        useEffect(() => {

            fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=09cdee9a7f384258ac81bc7fdc6c8665')
            .then(response => response.json())
            .then(data => setArticles(data.articles))
        },[])
    return (


        <Box sx =  {{flexGrow: 1}}>
            <Grid container spacing = {{xs: 2, md: 3}} columns = {{xs: 4, sm: 8, md: 12}}>
                {
                    articles.map(article => <Grid item xs = {2} sm={4} md={4}>
                        <News articles={article}></News>
                   </Grid>)
                }

            </Grid>
        </Box>
    );
};

export default Newspapers;