exports.createSchemaCustomization = ({ actions }) => {
    const { createFieldExtension, createTypes } = actions

    createTypes(`
        type Recipe implements Node {
            title: String
        }
    `)
}