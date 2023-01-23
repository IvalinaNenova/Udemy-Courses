import { html, render } from '../node_modules/lit-html/lit-html.js';

const pastTemplate = () => html`
<div class="skills">
    <h2>What have I been up to</h2>
    <div class="skill-row">
        <h3 class="multi-img">2008-2012</h3>
        <h3>Education</h3>
        <p>After graduating high-school with orientation to foreign languages I got a Bachelor's Degree in Management
            form the University of Economics in Varna, Bulgaria. I've learn a lot about organazing and maintaining a
            successfull business, how to be efective leader and how to motivate others.</p>
    </div>
    <hr>
    <div class="skill-row">
        <h3 class="multi-img">2013-2020</h3>
        <h3>Work</h3>
        <p>While studying in University I took advantage of the Work and Travel program and worked for a summer in the
            US, which sparked my love for traveling. After graduating I signed up for casino dealer training and shortly
            after signed on my first cruise ship. In 7 years I've done 7 contracts accross 11 different ships nad 4
            different cruise lines. I've visited 79 countries, worked with a crew of more than 80 nationalities and made
            lifelong friendships.
        </p>
        <p>Although being a casino dealer is not a transferable skill, working on board has tought me to be
            responsible, disciplined, respectfull and to always strive to be better. Also, how to be a team player, to
            adapt to an ever changing environment and to provide excelent custommer service. <a
                href="https://www.linkedin.com/pulse/why-ex-cruise-ship-employees-make-best-employment-candidates-ahire/?trackingId=V64r3JR8abjXSoCv9roqEA%3D%3D">Here's</a>
            an article about why ex-cruise ship employees make the Best employment candidates.</p>
    </div>
    <hr>
    <div class="skill-row">
        <h3 class="multi-img">2004-Present</h3>
        <p>Hotel Perla is 

        </p>
    </div>
    <hr>
</div>
`

export const displayPast = () => {
    render(pastTemplate(), document.querySelector('.middle-container'));
}