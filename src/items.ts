import WarframeItems from 'warframe-items'
export default class Items {
    static getFirstItem () {
        const items = new WarframeItems({
            category: ['Primary']
        })

        return  items[0].name
    }  
}