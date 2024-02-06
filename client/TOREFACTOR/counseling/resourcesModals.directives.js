angular.module('app').directive('selfHelpContent', selfHelpContent);
angular.module('app').directive('professionalHelp', professionalHelp);
angular.module('app').directive('selfDirectedBooks', selfDirectedBooks);
angular.module('app').directive('feelingsMoodDisorders', feelingsMoodDisorders);
angular.module('app').directive('medicalIssues', medicalIssues);
angular.module('app').directive('medicatiguidescohol', medicationsAlcohol);
angular.module('app').directive('medicationsMarijuana', medicationsMarijuana);
angular.module('app').directive('medicationsOpiates', medicationsOpiates);
angular.module('app').directive('medicationsStimulants', medicationsStimulants);
angular.module('app').directive('medicationsGambling', medicationsGambling);
angular.module('app').directive('medications', medications);
angular.module('app').directive('relationships', relationships);
angular.module('app').directive('tobacco', tobacco);
angular.module('app').directive('socialAssertivenessSkills', socialAssertivenessSkills);
angular.module('app').directive('urgesCravings', urgesCravings);
angular.module('app').directive('readingList', readingList);

function selfHelpContent() {
    return{
        template: "<p><a href='http://smartrecovery.org' target='_blank'>SMART Recovery</a> is the self-help " +
        "program upon which this web course is based. It is a tremendous resource for getting support from others for " +
        "your efforts. There also is a lot of collective wisdom there on practical strategies for achieving and " +
        "maintaining abstinence from all addictions.</p>"
    };
}

function professionalHelp(){
    return{
        template: "<p>If you've been struggling to achieve or maintain abstinence, consider getting some professional " +
        "help. <a href='http://www.abct.org' target='_blank'>The Association for Behavioral and Cognitive Therapies " +
        "(ABCT)</a> is an organization of cognitive-behavioral therapist and researchers with an emphasis on " +
        "evidence-based approaches to helping people. Their “<a href='https://aabt.org/members/Directory/Find_A_Therapist.cfm' target='_blank'>find a therapist</a>” feature may help you to find someone in your area. Another resource is " +
        "a list of evidence-based cognitive behavioral treatment programs that is available <a href='http://www.smartrecovery.org/Misc/provider_programs.php' target='_blank'>here</a>.</p>"
    };
}
function selfDirectedBooks() {
    return{
        template: "<ul><li><a href='http://smartrecovery.org/SMARTStore/index.php?main_page=product_info&cPath=1&products_id=21' " +
        "target='_blank'>Sex, Drugs, Gambling, and Chocolate</a> by Dr. Tom Horvath is an excellent manual. He is the " +
        "president of <a href='http://www.smartrecovery.org' target='_blank'>SMART Recovery</a> and past president of " +
        "the Addictions Division of the American Psychological Association.</li><li>" +
        "<a href='http://smartrecovery.org/SMARTStore/index.php?main_page=product_info&cPath=1&products_id=23' target='_blank'>" +
        "Sober for Good</a> is for people who have decided to stop drinking and or interested in how others have his " +
        "succeeded. It's also helpful for people who are thinking about abstaining.  " +
        "<a href='http://www.behaviortherapy.com/soberforgoodreview.htm' target='_blank'>Click here</a> for a detailed " +
        "review.</li><li>SMART Recovery also has a good list of " +
        "<a href='http://www.smartrecovery.org/resources/readlist.html' target='_blank'>recommended readings</a>. " +
        "An edited list is below.</li></ul>"
    };

}
function feelingsMoodDisorders() {
    return{
        template:"<p>If you know or wonder whether you have a mood disorder (e.g., clinical depression, bipolar " +
        "disorder), we encourage you to seek professional help. If you're not under the care of a professional, consult" +
        " your family physician. Another resource is the " +
        "<a href='http://mentalhealth.samhsa.gov/databases' target='_blank'>mental health services</a> locator site for" +
        " the Federal Government.  </p><ul><li>" +
        "<a href='http://www.health.harvard.edu/special_health_reports/Coping_with_Anxiety_and_Phobias.htm' target='_blank'>" +
        "Mastering anxiety and phobias</a>. This is a health report published by the Harvard Medical School.</li><li>" +
        "<a href='http://www.amazon.com/gp/product/0380810336?ie=UTF8&tag=behaviorthera-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0380810336' target='_blank'>" +
        "Feeling Good: The New Mood Therapy</a> and " +
        "<a href='http://www.amazon.com/gp/product/0452281326?ie=UTF8&tag=behaviorthera-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0452281326' target='_blank'>" +
        "The Feeling Good Handbook</a> These self-help manuals are based on cognitive behavioral therapy (CBT) " +
        "principles and focus on depression and anxiety. There is a lot of scientific evidence supporting the " +
        "effectiveness of CBT for depression and anxiety.</li><li>" +
        "<a href='http://www.amazon.com/gp/product/0898621283?ie=UTF8&tag=behaviorthera-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0898621283' target='_blank'>" +
        "Mind Over Mood: Change How You Feel by Changing the Way You Think</a></li></ul><p>The following are client " +
        "manuals used in evidence-based treatments for anxiety disorders. If you think you have anxiety disorder, " +
        "consider seeing a therapist with expertise in these areas. The programs can be challenging to complete by " +
        "yourself.</p><ul><li>" +
        "<a href='http://www.amazon.com/gp/product/0195189183/ref=as_li_ss_tl?ie=UTF8&tag=behaviorthera-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0195189183' target='_blank'>" +
        "Mastering Your Fears and Phobias</a></li><li>" +
        "<a href='http://www.amazon.com/gp/product/0195336690/ref=as_li_ss_tl?ie=UTF8&tag=behaviorthera-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0195336690' target='_blank'>" +
        "Managing Social Anxiety, Workbook, 2nd Edition: A Cognitive-Behavioral Therapy Approach</a></li><li>" +
        "<a href='http://www.amazon.com/gp/product/0195186850/ref=as_li_ss_tl?ie=UTF8&tag=behaviorthera-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=0195186850' target='_blank'>" +
        "Mastery of Obsessive-Compulsive Disorder: A Cognitive Behavioral Approach</a></li><li>" +
        "<a href='http://www.amazon.com/gp/product/0195338553/ref=as_li_ss_tl?ie=UTF8&tag=behaviorthera-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=0195338553' target='_blank'>" +
        "Stopping Anxiety Medication Workbook</a></li><li>" +
        "<a href='http://www.amazon.com/gp/product/0195183762/ref=as_li_ss_tl?ie=UTF8&tag=behaviorthera-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=0195183762' target='_blank'>" +
        "Reclaiming Your Life After Rape: Cognitive-Behavioral Therapy for Posttraumatic Stress Disorder</a></li></ul>"
    };

}
function medicalIssues() {
    return{
        template:"<ul><li><a href='http://www.mayoclinic.com' target='_blank'>The Mayo Clinic</a></li><li>" +
        "<a href='http://www.webmd.com' target='_blank'>WebMD</a></li></ul><p>If you're searching for health-related " +
        "issues on the Internet we recommend sites that subscribe to the <a href='http://www.hon.ch' target='_blank'>" +
        "Health on the Net Foundation</a> (HON). Sites that subscribe to the HON and agreed to respect and honor the " +
        "eight principles of the <a href='http://www.hon.ch/HONcode/Conduct.html' target='_blank'>HON code of conduct" +
        "</a>.</p>"
    };

}
function medicationsAlcohol() {
    return{
        template:"<h5 class='bold italic'>Medications--Alcohol</h5><p>There are three medications approved by the FDA " +
        "for use with people who are trying to abstain from drinking: acamprosate, naltrexone, disulfiram.  There is " +
        "evidence of effectiveness of all three medications.</p><ul><li>Acamprosate reduces withdrawal symptoms.</li>" +
        "<li>Naltrexone is available in tablet form (generic) and as a once-a-month injection (Vivitrol).  It reduces " +
        "urges and cravings to drink (discussed below).</li><li>Disulfiram acts as a deterrent to drinking.  It causes " +
        "serious psychological reactions if a person does drink. It can be effective in preventing drinking but only " +
        "when it is taking as part of a daily ritual between the drinker and a concern significant other who is " +
        "supportive of the drinker’s effort to remain sober. If you’re interested in this, consider seeing a therapist" +
        " who has been trained in the CRA (Community Reinforcement Approach) protocol. See the ABCT linked above in the" +
        " Professional help section to help you " +
        "<a href='https://aabt.org/members/Directory/Find_A_Therapist.cfm' target='_blank'>find a therapist</a>.</li></ul>"};
}
function medicationsMarijuana() {
    return{
        template:"<h5 class='bold italic'>Medications—Marijuana</h5><p>Currently there is are no medications for the" +
            " treatment of marijuana dependence.</p>"
    };
}
function medicationsOpiates() {
    return{
        template:"<h5 class='bold italic'>Medications—Opiates</h5><p>There are two medications that help people get " +
        "clean from using opioids, buprenorphine and methadone.</p>" };
}
function medicationsStimulants() {
    return{
        template:"<h5 class='bold italic'>Medication—Stimulants</h5><p>Detoxification from stimulants can be lengthy " +
        "and challenging. Currently there are no medications for the treatment of stimulant abuse or dependence.</p>"
    };
}
function medicationsGambling() {
    return{
        template:"<h5 class='bold italic'>Medications--Compulsive Gambling</h5><p>Currently there are no medications " +
        "for the treatment of compulsive gambling.</p>"
    };
}
function medications() {
    return{
        template:"<medications-alcohol></medications-alcohol><medications-marijuana>" +
        "</medications-marijuana><medications-opiates></medications-opiates><medications-stimulants>" +
        "</medications-stimulants><medications-gambling></medications-gambling>"
    };
}
function relationships(){
    return{
        template:"<p>Spouse or significant others. Would you like to have a better relationship? Here two resources you" +
        " may find useful.</p><ul><li>" +
        "<a href='http://www.amazon.com/gp/product/0965981800?ie=UTF8&tag=behaviorthera-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0965981800' target='_blank'>" +
        "Making it as a Couple: Prescription for a Quality Relationship</a> We consider this one of the best self-help " +
        "guides for couples who want to improve their relationships.</li><li>" +
        "<a href='http://smartrecovery.org/SMARTStore/index.php?main_page=product_info&cPath=1&products_id=17' target='_blank'>" +
        "Get Your Loved One Sober: Alternatives to Nagging, Pleading, and Threatening.</a> This self-help manual helps " +
        "spouses and others who are concerned about a person's drinking learn how to positively reinforce sobriety. " +
        "It also shows them how to help keep you motivated in your efforts. </li></ul>"
    };
}
function tobacco(){
    return{
        template:"<p>The <a href='https://www.quitnow.net/programlookup' target='_blank'>Quit for Life</a> program is a " +
        "free (for many in the U.S.) smoking cessation program that's endorsed by the American Cancer Society. The " +
        "company that runs his program handles most State-run smoking quit lines.</p>"
    };
}
function socialAssertivenessSkills() {
    return{
        template:"<ul><li><a href='http://www.amazon.com/gp/product/1572242094?ie=UTF8&tag=behaviorthera-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=1572242094' target='_blank'>" +
        "The Assertiveness Workbook: How to Express Your Ideas and Stand Up for Yourself at Work and in Relationships" +
        "</a></li></ul>"
    };
}
function urgesCravings (){
    return{
        template: "<ul><li><a href='https://www.smartrecovery.org/shop/?main_page=product_info&cPath=1&products_id=21' target='_blank'>" +
        "Sex, Drugs, Gambling, and Chocolate</a> by dr. Tom Horvath. This help self-help manual written by the " +
        "President of <a href='http://www.smartrecovery.org' target='_blank'>SMART Recovery</a> has several excellent " +
        "chapters on identifying and managing urges and cravings.</li><li>Dr. Robert Westenneyer also has a good " +
        "<a href='http://www.doctordeluca.com/Library/DetoxEngage/CopingUrges.htm' target='_blank'>write-up</a> on " +
        "coping with urges.</li><li> <a href='http://www.campral.com' target='_blank'>Campral</a> (Acamprosate) is " +
        "prescription medication. It is clinically proven to reduce urges, cravings, and the arousal that precedes " +
        "drinking for many people. Why the typical dose, 2 pills 3 times per day can be inconvenient, taking them can " +
        "serve as an ongoing reminder of your priorities.</li><li>Naltrexone is a prescription medication that is " +
        "clinically shown to reduce urges and Cravings to drink. It's available as a pill (generic) and as a once " +
        "monthly injection (<a href='http://www.vivitrol.com' target='_blank'>Vivitrol</a>).  The genetic pills are " +
        "relatively inexpensive. Vivitrol is expensive but does not require daily decision and is covered by many " +
        "insurance plans.</li><li>Antabuse (disulfiram) is also prescription medication. It can be an effective " +
        "deterrent to drinking. Drinking while taking disulfiram is a medical emergency.  Because of this many people " +
        "want take it regularly unless it is taken as part of a supportive ritual with a loved one.  Then it can " +
        "reassure and rebuild trust with loved ones. Learning this supportive ritual is best done with the help of a " +
        "behavioral marital therapist with expertise in substance abuse. Consider the “" +
        "<a href='https://aabt.org/members/Directory/Find_A_Therapist.cfm' target='_blank'>find a therapist</a>” " +
        "feature on the ABCT website to find someone to help you with this.</li></ul>"
    };
}
function readingList() {
    return{
        template: "<ul><li><a href='http://smartrecovery.org/SMARTStore/index.php?main_page=product_info&cPath=1&products_id=31' target='_blank'>" +
        "SMART Recovery Handbook.</a>  A compilation of practical information designed to assist the reader in " +
        "attaining the ultimate goal of recovery.</li><li>" +
        "<a href='http://www.amazon.com/gp/product/1884365108/ref=as_li_ss_tl?ie=UTF8&tag=behaviorthera-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=1884365108' target='_blank'>" +
        "Alcohol: how to Give It Up and Be Glad You Did</a></li><li>" +
        "<a href='http://www.amazon.com/gp/redirect.html?ie=UTF8&location=http%3A%2F%2Fwww.amazon.com%2FWhen-AA-Doesnt-Work-You%2Fdp%2F0942637534&tag=behaviorthera-20&linkCode=ur2&camp=1789&creative=9325' target='_blank'>" +
        "When AAA Doesn't Work for You: Rational Steps to Quitting Alcohol</a></li><li>" +
        "<a href='http://www.amazon.com/exec/obidos/tg/detail/-/047134575X/qid=1122566810/sr=8-1/ref=sr_8_xs_ap_i1_xgl14/103-3041215-3097453?v=glance&amp;s=books&amp;n=507846' target='_blank'>" +
        "Recovery Options: The Complete Guide</a></li><li>" +
        "<a href='http://www.amazon.com/gp/product/1884365175/ref=as_li_ss_tl?ie=UTF8&tag=behaviorthera-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=1884365175' target='_blank'>" +
        "Resisting 12-step Coercion</a></li><li>" +
        "<a href='http://www.amazon.com/gp/product/0671755307/ref=as_li_ss_tl?ie=UTF8&tag=behaviorthera-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0671755307' target='_blank'>" +
        "Truth About Addiction and Recovery</a></li><li><a href='http://www.amazon.com/gp/product/0932838057/ref=as_li_ss_tl?ie=UTF8&tag=behaviorthera-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0932838057' target='_blank'>" +
        "Coping Better… Anytime, Anywhere: The Handbook of Rational Self-Counseling</a></li><li>" +
        "<a href='http://www.amazon.com/exec/obidos/tg/detail/-/0380810336/qid=1122567373/sr=8-1/ref=pd_bbs_sbs_1/103-3041215-3097453?v=glance&amp;s=books&amp;n=507846' target='_blank'>" +
        "Feeling Good</a> David Burns (Signet, 1980)</li><li>" +
        "<a href='http://www.amazon.com/exec/obidos/tg/detail/-/B000736CP2/qid=1122567420/sr=8-1/ref=sr_8_xs_ap_i1_xgl14/103-3041215-3097453?v=glance&amp;s=books&amp;n=507846' target='_blank'>" +
        "How to Stubbornly Refuse to Make Yourself Miserable about Anything, Yes anything!</a></li><li>" +
        "<a href='http://www.amazon.com/gp/product/0944435424/ref=as_li_ss_tl?ie=UTF8&tag=behaviorthera-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0944435424' target='_blank'>" +
        "Three Minute Therapy: Change Your Thinking, Change Your Life</a></li><li>" +
        "<a href='http://www.amazon.com/gp/product/0553263900/ref=as_li_ss_tl?ie=UTF8&tag=behaviorthera-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0553263900' target='_blank'>" +
        "When I Say No, I Feel Guilty</a></li><li>" +
        "<a href='http://www.amazon.com/exec/obidos/tg/detail/-/038072572X/qid=1122567814/sr=8-1/ref=pd_bbs_sbs_1/103-3041215-3097453?v=glance&amp;s=books&amp;n=507846' target='_blank'>" +
        "Changing for Good</a></li></ul>"
    }
}