export class Level {

    drawMapLayout(levelLayout, mappings) {
        const layerSettings = {
            tileWidth: 16,
            tileHeight: 12,
            tiles: mappings
        }

        //An array of layes of the map
        this.map = []
        //for of is equal to for each
        //layerLayout is an array of strings
        for(const layerLayout of levelLayout){
            //Addlevel is what going to add the map to the screen
            this.map.push(addLevel(layerLayout, layerSettings))
        }

        for(const layer of this.map){
            //use is a function that can be used in game objects to add components to them after they're
            //already created
            layer.use(scale(4))
        }
    }

    drawBackground(bgSpriteName) {
        //the fixed() property is set because when the player moves the background will stay fixed
        add([sprite(bgSpriteName), fixed(), scale(4)])
    }
}