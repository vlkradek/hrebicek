import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <header className={styles.header}>
                <div class={styles.intro}>
                    <h4>HELLO, I AM</h4>
                    <h1>Matej Hrebicek</h1>
                </div>
            </header>
            <main className={styles.main}>
                <div class={styles.about_me}>
                    <div class={styles.about_cont}>
                        <h3 class={styles.sec_title}>About me</h3>

                        <p class={styles.sec_text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                    </div>
                    <img src="img/copy.svg" alt="" />
                </div>
                <section class={styles.services}>
                    <h3 class={styles.sec_title}>MY SERVICES</h3>
                    {/* <!--            <hr class={styles.title-split}>--> */}
                    <div class={styles.services_cont}>
                        <div class={styles.item}>
                            <img src="img/copywriting.jpg" alt="" />
                            <div class={styles.textover}>
                                <h6>Copywriting</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                </p>
                            </div>
                        </div>
                        <div class={styles.item}>
                            <img src="img/marketing.jpg" alt="" />
                            <div class={styles.textover}>
                                <h6>Advert&nbsp;Marketing</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class={styles.about_serv}>
                    <h3 class={styles.sec_title}>ABOUT ME</h3>
                    <div class={styles.about_serv_cont}>
                        <div class={styles.item}>
                            <h4>Advert Marketing</h4>
                            <div class={styles.label}>Instagram - Facebook</div>
                            <p>
                                I began Advert Marketing about year ago, I was
                                taught by millionaire advertisers and learned
                                everything I know from them. I've had my fair
                                share of trial and error, but because of these
                                fails I've learned how to strategize my
                                marketing. I practice these strategies daily in
                                order to deliver nothing but the best results.
                            </p>
                        </div>
                        <div class={styles.item}>
                            <h4>Advert Marketing</h4>
                            <div class={styles.label}>Instagram - Facebook</div>
                            <p>
                                I began Advert Marketing about year ago, I was
                                taught by millionaire advertisers and learned
                                everything I know from them. I've had my fair
                                share of trial and error, but because of these
                                fails I've learned how to strategize my
                                marketing. I practice these strategies daily in
                                order to deliver nothing but the best results.
                            </p>
                        </div>
                        <div class={styles.item}>
                            <h4>Advert Marketing</h4>
                            <div class={styles.label}>Instagram - Facebook</div>
                            <p>
                                I began Advert Marketing about year ago, I was
                                taught by millionaire advertisers and learned
                                everything I know from them. I've had my fair
                                share of trial and error, but because of these
                                fails I've learned how to strategize my
                                marketing. I practice these strategies daily in
                                order to deliver nothing but the best results.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="portfolio">
                    <h3 class={styles.sec_title}>PORTFOLIO</h3>
                    <div class={styles.portfolio_cont}>
                        <div class={styles.slider}>
                            <div class={styles.slides} id="slides"></div>
                            <div class={styles.left} id="left">
                                <i class="bx bxs-chevron-left"></i>
                            </div>
                            <div class={styles.right} id="right">
                                <i class="bx bxs-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </section>
                <section class={styles.offer}>
                    <h3 class={styles.sec_title}>LET'S WORK TOGETHER!</h3>
                    <a href="#">SEND A JOB!</a>
                </section>
                <section class={styles.contact}>
                    <h3 class={styles.sec_title}>CONTACT</h3>
                    <div class={styles.contact_cont}>
                        <h5>Get in Touch</h5>
                        <div class={styles.items}>
                            <div class={styles.item}>
                                <i class="bx bxs-map"></i>
                                <a href="#">Brno</a>
                                <p>Adress</p>
                            </div>
                            <div class={styles.item}>
                                <i class="bx bxs-phone"></i>
                                <a href="#">+420111222333</a>
                                <p>Call Me</p>
                            </div>
                            <div class={styles.item}>
                                <i class="bx bxs-envelope"></i>
                                <a href="#">abcabc@gmail.com</a>
                                <p>Email Me</p>
                            </div>
                        </div>
                        <form action="/send-email" method="post">
                            <label for="from">Váš email</label>
                            <input
                                type="email"
                                name="from"
                                id="from"
                                placeholder="example@example.cz"
                                style={{ gridArea: "a" }}
                            />
                            <label for="subject">Obsah</label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Your Subject"
                                style={{ gridArea: "b" }}
                            />
                            <label for="from">Zpráva</label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Your message..."
                                style={{ gridArea: "c" }}
                            ></textarea>
                            <input
                                type="submit"
                                value="Odeslat"
                                style={{ gridArea: "d" }}
                            />
                        </form>
                    </div>
                </section>
            </main>
            <footer className={styles.footer}>
                <div class={styles.footer_cont}>
                    <span>&copy; 2022 Matěj Hřebíček</span>
                    <span>
                        Made by <a href="radelvlk.fun">Radek Vlk</a>
                    </span>
                </div>
            </footer>
        </>
    );
}
