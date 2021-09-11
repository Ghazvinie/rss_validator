// const requirements = [

//     {
//         title: 'URL',
//         startDescription: 'This is the URL to your feed.',
//         passStatus: 'none'
//     },
//     {
//         title: '<author>',
//         startDescription: 'This is the author of the article.',
//         passStatus: 'none'
//     },
//     {
//         title: '<guid>',
//         startDescription: 'This is the Globally Unique Identifier. The JS Player can use this to match audio articles in your SpeechKit audio content management system with articles in your content management system.',
//         passStatus: 'none'
//     },
//     {
//         title: '<title>',
//         startDescription: 'This is the article title.',
//         passStatus: 'none'
//     },
//     {
//         title: '<description>',
//         startDescription: 'This is the article description.',
//         passStatus: 'none'
//     },
//     {
//         title: '<link>',
//         startDescription: 'This is the article URL. The JS Player and Player iFrame embed can use this to match audio articles in your SpeechKit audio content management system with articles in your content management system.',
//         passStatus: 'none'
//     },
//     {
//         title: '<pubDate>',
//         startDescription: 'This is the pubDate. If a pubDate is updated e.g, when an update is made to an article. SpeechKit will regenerate the audio.',
//         passStatus: 'none'
//     },
//     {
//         title: '<enclosure>',
//         startDescription: 'This is multimedia content e.g. images.',
//         passStatus: 'none'
//     },
//     {
//         title: '<content>',
//         startDescription: 'This is the article content (excluding the title).',
//         passStatus: 'none'
//     }
// ];

const requirementsObj = {
    url: {
        title: 'URL',
        startDescription: 'This is the URL to your feed.',
        passDescription: 'Your feed was found!',
        failDescription: 'The URL is valid, but there was nothing at the URL.',
        passStatus: 'none'
    },
    author: {
        title: '<author>',
        startDescription: 'This is the author of the article.',
        passDescription: 'Okay!',
        failDescription: 'The <author> element is missing.',
        passStatus: 'none'
    },
    guid: {
        title: '<guid>',
        startDescription: 'This is the Globally Unique Identifier. The JS Player can use this to match audio articles in your SpeechKit audio content management system with articles in your content management system.',
        passDescription: 'Okay!',
        failDescription: 'The <guid> element is missing.',
        passStatus: 'none'
    },
    title: {
        title: '<title>',
        startDescription: 'This is the article title.',
        passDescription: 'Okay!',
        failDescription: 'The <title> element is missing.',
        passStatus: 'none'
    },
    description: {
        title: '<description>',
        startDescription: 'This is the article description.',
        passDescription: 'Okay!',
        failDescription: 'The <description> element is missing.',
        passStatus: 'none'
    },
    link: {
        title: '<link>',
        startDescription: 'This is the article URL. The JS Player and Player iFrame embed can use this to match audio articles in your SpeechKit audio content management system with articles in your content management system.',
        passDescription: 'Okay!',
        failDescription: 'The <link> element is missing.',
        passStatus: 'none'
    },
    pubDate: {
        title: '<pubDate>',
        startDescription: 'This is the pubDate. If a pubDate is updated e.g, when an update is made to an article. SpeechKit will regenerate the audio.',
        passDescription: 'Okay!',
        failDescription: 'The <pubDate> element is missing.',
        passStatus: 'none'
    },
    enclosure: {
        title: '<enclosure>',
        startDescription: 'This is multimedia content e.g. images.',
        passDescription: 'Okay!',
        failDescription: 'The <enclosure> element is missing.',
        passStatus: 'none'
    },
    content: {
        title: '<content>',
        startDescription: 'This is the article content (excluding the title).',
        passDescription: 'Okay!',
        failDescription: 'The <content> element is missing.',
        passStatus: 'none'
    }
};

export {requirementsObj };