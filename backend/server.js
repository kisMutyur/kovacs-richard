const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const json = require("json")
const app = express();



const query ="SELECT * FROM `berletek` ORDER BY tipusok.ar ASC inner join berletek on tipusok.id = berletek.tipus_id";
app.get('/berletek', async (req, res) =>
    {
        try
        {
        res.mysql.query(query)
        }

        catch(error)
        {
            res.status(500).console.error("nem sikerült")
        }
        
    })
    const query2 ="SELECT * FROM `berletek` WHERE megnevezes = 'diak' and ervenyesseg_nap <= 30;";
app.get('/berletek/elerheto', async (req, res) =>
    {
        try
        {
        res.mysql.query(query2)
        }

        catch(error)
        {
            res.status(500).console.error("nem sikerült")
        }
        
    })
    app.get('/berletek/kereses:szoveg', async (req, res) =>
        {
            try
            {
            res.mysql.query(query2)
            }
    
            catch(error)
            {
                res.status(500).console.error("nem sikerült")
            }
            
        })
        app.get('/tipusok/statisztika', async (req, res) =>
            {
                try
                {
                res.mysql.query(query2)
                }
        
                catch(error)
                {
                    res.status(500).console.error("nem sikerült")
                }
                
            })


app.listen(3307, () => {
  console.log(`Server is running on http://localhost:3307`);
});