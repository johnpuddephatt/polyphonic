const markdownIt = require('markdown-it')


module.exports = function (config) {

    // Markdown
    config.setLibrary(
        'md',
        markdownIt({
            html: true,
            breaks: true,
            linkify: true,
            typographer: true
        })
    )

    config.addFilter('markdown', function (str) {

        const md = require('markdown-it')({
            html: false,
            breaks: true,
            linkify: true
        });
        return md.render(str);



    });


    // Pass-through files
    config.addPassthroughCopy('src/assets/images')
    config.addPassthroughCopy('src/assets/styles')
    config.addPassthroughCopy('src/admin')
    config.addPassthroughCopy('src/uploads')


    // Deep-Merge
    config.setDataDeepMerge(true)

    // Base Config
    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: 'includes',
            layouts: 'layouts',
            data: 'data'
        },
        templateFormats: ['njk', 'md', '11ty.js'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk'
    }
}
