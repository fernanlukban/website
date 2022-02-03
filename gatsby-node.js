exports.createSchemaCustomization = ({ actions }) => {
    const { createFieldExtension, createTypes } = actions

    createTypes(`
        type Ingredient implements Node {
            name: String!
        }
        type Recipe implements Node {
            title: String!
            step(number: Int!): String
            ingredients: [Ingredient!]!
        }
    `)
}