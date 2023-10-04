import {observable, action} from 'mobx';

export class SongsStore {

    @observable searchResults = [];
    @observable viewMode = 'list';
    @observable searchHistory = [];
    
    @action go() {

    }

    @action setViewMode(newMode) {
        this.viewMode = newMode;
    }

}