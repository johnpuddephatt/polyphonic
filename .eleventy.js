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
