import PullPersistor from "pull-persist";
import { Store } from "pullstate";

interface IGlobalStore {
    navActive: boolean
}

const GlobalStore = new Store<IGlobalStore>({
    navActive: false
});


export const GlobalStoreReducer = () => {
    const setNavActive = (isActive: boolean = true) => {
        return GlobalStore.update(s => {
            s.navActive = isActive;
        });
    }

    return {
        setNavActive,
    }
}


// const persistedGlobalStore = new PullPersistor<IGlobalStore>(GlobalStore, "movie-store", "LOCAL");
// persistedGlobalStore.initialize();

export default GlobalStore;