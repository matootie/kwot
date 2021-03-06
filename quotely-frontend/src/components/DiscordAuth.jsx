import React from "react";
import { Redirect, Link } from "react-router-dom";

// const API_ENDPOINT = process.env.API_ENDPOINT;
// const CLIENT_ID = process.env.CLIENT_ID;
// const CLIENT_SECRET = process.env.CLIENT_SECRET;
// const REDIRECT_URI = process.env.REDIRECT_URI;
const AUTHORIZE_URL = process.env.AUTHORIZE_URL;
// const TOKEN_URL = process.env.TOKEN_URL;
// const REVOKE_TOKEN_URL = process.env.REVOKE_TOKEN_URL;


function authorize_discord(){
    
}

function getToken(){

}



function DiscordAuth(){
    return(
        <div>
            <a href={{AUTHORIZE_URL}}> something </ a>
        </div>
    )
};

export default DiscordAuth;