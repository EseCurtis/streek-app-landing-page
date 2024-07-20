import PullPersistor from "pull-persist";
import { Store } from "pullstate";

interface IGlobalStore {
    navActive: boolean;
    mobileNavActive: boolean;
}

const GlobalStore = new Store<IGlobalStore>({
    navActive: false,
    mobileNavActive: false
});


export const GlobalStoreReducer = () => {
    const setNavActive = (isActive: boolean = true) => {
        return GlobalStore.update(s => {
            s.navActive = isActive;
        });
    }
    const toggleMobileNavActive = (forceToggle: boolean | null = null) => {
        if (typeof forceToggle === "boolean") {
            return GlobalStore.update(s => {
                s.mobileNavActive = (forceToggle);
            });
        } else {

            return GlobalStore.update(s => {
                s.mobileNavActive = !s.mobileNavActive;
            });
        }
    }

    return {
        setNavActive,
        toggleMobileNavActive
    }
}


// const persistedGlobalStore = new PullPersistor<IGlobalStore>(GlobalStore, "movie-store", "LOCAL");
// persistedGlobalStore.initialize();

export default GlobalStore;