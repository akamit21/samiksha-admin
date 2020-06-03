# Store management for fuse

We can implement custom state for all the custom pages in ***External Module***    
* Path to store: `src/e/store/index.js`
* Path to actions: `src/e/store/actions/`
* Path to reducers: `src/e/store/reducers/`

## Store
Store is implemented using redux-thunk with persistor. So we have option to store the states locally with option to exclude some state. 

 Following is the config or persistor to maintain locally saved state.
 `const persistConfig = {  
	    key: 'root',  
	    storage: storage,  
	    blacklist: ['navigation'],  
	    stateReconciler: autoMergeLevel2 
    };
`

you can blacklist reducers to save data locally by putting it into blacklisted content in the config.
