/// <reference path="./../typings/main.d.ts" />

import * as React from "react";
import {uniqueId, map} from "lodash";

export interface IProps extends React.Props<any>
{
    title: string;
    
    appName?: string;
    
    metaDescription: string;
    
    skipCommonCss?: boolean;
    
    /**
     * Extra CSS that will be appended to the layout's head.
     */
    css?: string[];
}

export default function Head(props: IProps)
{
    const links = map(props.css, link => <link key={uniqueId()} href={link} rel="stylesheet" />)
    
    return (
        <head>
            <title>{props.title} | {props.appName}</title>

            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="description" content={props.metaDescription} />
            <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
            <meta name="google-site-verification" content="D6jvWqJJtMkzsMtAYEbVyOQUFiTAzv8Bx2ebzYmVpbc" />
            <meta name="msvalidate.01" content="4D50DA62EDC9DD1E9408EC94F9D5AFD2" />
            <link rel="shortcut icon" href="/images/favicon.ico?v=3" type="image/x-icon" />
            
            { 
                props.skipCommonCss ? null :
                
                [
                    <link key={uniqueId()} href="/wwwroot/bundles/common.min.css" rel="stylesheet" />,
                    <link key={uniqueId()} href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet" />
                ]
            }
            
            {links}
            {props.children}
        </head>
    );
}