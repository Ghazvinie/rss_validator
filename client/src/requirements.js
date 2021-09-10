const requirements = [

    {
        title: 'URL',
        description: 'This is the URL to your feed.',
        passStatus: 'none'
    },
    {
        title: '<author>',
        description: 'This is the author of the article.',
        passStatus: 'none'
    },
    {
        title: '<guid>',
        description: 'This is the Globally Unique Identifier. The JS Player can use this to match audio articles in your SpeechKit audio content management system with articles in your content management system.',
        passStatus: 'none'
    },
    {
        title: '<title>',
        description: 'This is the article title.',
        passStatus: 'none'
    },
    {
        title: '<description>',
        description: 'This is the article description.',
        passStatus: 'none'
    },
    {
        title: '<link>',
        description: 'This is the article URL. The JS Player and Player iFrame embed can use this to match audio articles in your SpeechKit audio content management system with articles in your content management system.',
        passStatus: 'none'
    },
    {
        title: '<pubDate>',
        description: 'This is the pubDate. If a pubDate is updated e.g, when an update is made to an article. SpeechKit will regenerate the audio.',
        passStatus: 'none'
    },
    {
        title: '<enclosure>',
        description: 'This is multimedia content e.g. images.',
        passStatus: 'none'
    },
    {
        title: '<content>',
        description: 'This is the article content (excluding the title).',
        passStatus: 'none'
    }
];

const requirementsObj = {
    url : {
        title: 'URL',
        description: 'This is the URL to your feed.',
        passStatus: 'none'
    },
    author: {
        title: '<author>',
        description: 'This is the author of the article.',
        passStatus: 'none'
    },
    guid : {
        title: '<guid>',
        description: 'This is the Globally Unique Identifier. The JS Player can use this to match audio articles in your SpeechKit audio content management system with articles in your content management system.',
        passStatus: 'none'
    },
    title : {
        title: '<title>',
        description: 'This is the article title.',
        passStatus: 'none'
    }, 
    description: {
        title: '<description>',
        description: 'This is the article description.',
        passStatus: 'none'
    },
    link: {
        title: '<link>',
        description: 'This is the article URL. The JS Player and Player iFrame embed can use this to match audio articles in your SpeechKit audio content management system with articles in your content management system.',
        passStatus: 'none'
    },
    pubDate: {
        title: '<pubDate>',
        description: 'This is the pubDate. If a pubDate is updated e.g, when an update is made to an article. SpeechKit will regenerate the audio.',
        passStatus: 'none'
    },
    enclosure: {
        title: '<enclosure>',
        description: 'This is multimedia content e.g. images.',
        passStatus: 'none'
    },
    content: {
        title: '<content>',
        description: 'This is the article content (excluding the title).',
        passStatus: 'none'
    }
};

export {requirements, requirementsObj};