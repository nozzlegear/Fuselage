/// <reference path="./../typings/main.d.ts" />

import * as React from "react";
import {map, uniqueId, clone} from "lodash";
import LayoutScripts, {IProps as ScriptProps} from "./scripts";
import LayoutHead, {IProps as HeadProps} from "./head"

export interface LayoutProps extends HeadProps, ScriptProps
{   
    scripts?: string[];
    
    sdhLinkClass?: string;
    
    blogLinkClass?: string;
}

export default function Layout(props: LayoutProps)
{       
    const headProps = clone(props);
    
    //Headprops should not have children , else it will duplicate the layout page's children content.
    headProps.children = undefined;
    
    return (
        <html lang="en">
        <LayoutHead {...headProps} />
        <body>
            <nav id="header-nav">
                <div className="brand">
                    <a href="/">
                        {props.appName}
                    </a>
                    <div id="nav-toggle">
                        <a href="#" id="toggler" className="toggler">
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>
                </div>
                <div id="collapsible" className="collapsible">
                    <menu className="right">
                        <div className={props.blogLinkClass}>
                            <a href="/blog">
                                Blog
                            </a>
                        </div>
                    </menu>
                </div>
            </nav>
            <main id="container">
                {props.children}
            </main>
            <footer id="footer">
                <p>
                    {`© ${props.appName}, ${new Date().getUTCFullYear()}. All rights reserved.`}
                </p>
                <p>
                    {"Powered by "}
                    <a target="_blank" href="https://github.com/nozzlegear/fuselage">
                        {"Fuselage"}
                    </a>
                    {"."}
                </p>
            </footer>
            <LayoutScripts scripts={props.scripts} />
        </body>
        </html>
    )
}