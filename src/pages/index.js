import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../assets/css/styles.css'
import { Plus, LogoAndType } from '../shared/Icons'
import Head from '../shared/Head'

export default () => 
    <div id="wrapper">
        <Head />
        {/* MAIN */}
        <main>
            <section className="content">
                <div className="top">
                    <h1>
                        <a href="/" title="yellowcode">
                            <LogoAndType />
                        </a>
                    </h1>
                </div>

                <div className="middle">
                    <h2>Software <Plus /><br/>Digital Marketing</h2>
                    <p><span>Work with us to build your next application,</span><span>manage your social media marketing,</span><span>and learn from our <a target="_blank" rel="noopener noreferrer" href="https://medium.com/yellowcode">industry resources</a>.</span></p>
                </div>

                <div className="bottom">
                    <a href="mailto:hello+website@yellowcode.co">Contact Us</a>
                </div>
            </section>
        </main>
        {/* end MAIN */}
    </div>
