/*
 * @author: aguiar0x01
 */
async function getProjectData() {
    return fetch('./data/project_data.json')
    .then(response => response.json())
    .then(projects => {
        return projects;
    });
}

export async function createProjectCardItems() {
    let projects = await getProjectData();
    let cards = document.getElementById('cards');

    projects.forEach(project => {
        let card = document.createElement('div');
        card.className = 'card';

        let rectangle = document.createElement('div');
        rectangle.className = 'top-rectangle';

        let cardItemTitle = document.createElement('p');
        cardItemTitle.className = 'title';
        cardItemTitle.textContent = project.title;
        rectangle.appendChild(cardItemTitle);

        let tags = document.createElement('div');
        tags.className = 'tags';
        project.tags.forEach(tagItemName => {
            let tag = document.createElement('div');
            tag.className = 'tag';

            let tagName = document.createElement('p');
            tagName.className = 'name';
            tagName.textContent = tagItemName;

            tag.appendChild(tagName);
            tags.appendChild(tag);
        });
        rectangle.appendChild(tags);

        card.appendChild(rectangle);
        cards.appendChild(card);
    });
}
