import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../Http/settings";

const initialState = {
  popularDrinks: [],
  popularIngredients: [],
  latestDrinks: [],
  randomDrinks: [],
  randomIngredients: [],
  coctailInfo: [],
  ingredientInfo: [],
  alfavit: [],
  search: [],
};

//? Popular Drinks ?//
export const getPopularDrinks = createAsyncThunk(
  "popularDrinks/getPopularDrinks",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const popularDrinksID = [
        11000, 11001, 11002, 11003, 11004, 11005, 11006, 11007,
      ];
      const results = await Promise.all(
        popularDrinksID.map(async (number) => {
          const result = await instance.get(`lookup.php?i=${number}`);
          return result.data.drinks;
        })
      );
      const combinedDrinks = results.flat();
      dispatch(PopularDrinks(combinedDrinks));
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
//? Popular Drinks ?//

//? Popular Ingredients ?//
export const getPopularIngredients = createAsyncThunk(
  "popularIngredients/getPopularIngredients",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const popularIngredientsID = [1, 2, 3, 4];
      const results = await Promise.all(
        popularIngredientsID.map(async (number) => {
          const result = await instance.get(`lookup.php?iid=${number}`);
          return result.data.ingredients;
        })
      );
      const combinedIngredients = results.flat();
      dispatch(PopularIngredients(combinedIngredients));
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
//? Popular Ingredients ?//

//? Ingredients Description ?//

//? Ingredients Description ?//

//? Latest Drinks ?//
export const getLatestDrinks = createAsyncThunk(
  "latestDrinks/getLatestDrinks",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const latestDrinksID = [
        178370, 178369, 178368, 178367, 178366, 178365, 178364, 178353,
      ];
      const results = await Promise.all(
        latestDrinksID.map(async (number) => {
          const result = await instance.get(`lookup.php?i=${number}`);
          return result.data.drinks;
        })
        );
      const combinedLatest = results.flat();
      dispatch(LatestDrinks(combinedLatest));
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
//? Latest Drinks ?//

//? Random Drinks ?//
export const getRandomDrinks = createAsyncThunk(
  "randomDrinks/getRandomDrinks",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const random = [1, 2, 3, 4, 5, 6, 7, 8];
      const responses = await Promise.all(
        random.map(() => instance.get("random.php"))
      );
      const randomDrinksData = responses.map(
        (response) => response.data.drinks[0]
        
        );
        dispatch(RandomDrinks(randomDrinksData));
      } catch (error) {
        console.log("Error fetching random Drinks:", error);
    }
  }
);
//? Random Drinks ?//

//? Random Ingredients ?//
export const getRandomIngredient = createAsyncThunk(
  "randomIngredients/getRandomIngredient",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const uniqueRandomIngredients = new Set();
      for (let i = 0; i < 4; i++) {
        let randomNumber;
        do {
          randomNumber = Math.floor(Math.random() * 617);
        } while (uniqueRandomIngredients.has(randomNumber));
        uniqueRandomIngredients.add(randomNumber);
      }

      const results = await Promise.all(
        [...uniqueRandomIngredients].map(async (number) => {
          try {
            const result = await instance.get(`lookup.php?iid=${number}`);
            if (result.data.ingredients) {
              return result.data.ingredients;
            }
          } catch (error) {
            console.log(error);
          }
          return null; // Если данные отсутствуют или запрос завершился с ошибкой, вернем null
        })
      );

      // Отфильтруем и удалим null значения из результатов
      const filteredResults = results.filter((ingredient) => ingredient !== null);

      // Если у нас все еще нет 4 уникальных ингредиентов, повторим цикл
      for (let i = filteredResults.length; i < 4; i++) {
        let randomNumber;
        do {
          randomNumber = Math.floor(Math.random() * 617);
        } while (uniqueRandomIngredients.has(randomNumber));
      
        try {
          const result = await instance.get(`lookup.php?iid=${randomNumber}`);
          if (result.data.ingredients) {
            filteredResults.push(result.data.ingredients);
          }
        } catch (error) {
          console.log(error);
        }
      }
      const combinedRandomIngredient = filteredResults.flat();
      dispatch(RandomIngredients(combinedRandomIngredient));
    } catch (error) {
      console.log(rejectWithValue(error.message));
    }
  }
);

//? Random Ingredients ?//

//? Coctail Info ?//
export const getCoctailInfo = createAsyncThunk(
  "coctailInfo/getCoctailInfo",
  async (elem, { rejectWithValue, dispatch }) => {
    const result = await instance.get(`lookup.php?i=${elem}`);
    dispatch(CoctailInfo(result.data.drinks));
  }
);
//? Coctail Info ?//

//? Ingredients Info ?//
export const getIngredientInfo = createAsyncThunk(
  "ingredientInfo/getIngredientInfo",
  async (elem, { rejectWithValue, dispatch }) => {
    const response = await instance.get(`filter.php?i=${elem}`);
    dispatch(IngredientInfo(response.data.drinks));
  }
);
//? Ingredients Info ?//

//? Alfavit ?//
export const getAlfavit = createAsyncThunk(
  "alfavit/getAlfavit",
  async (elem, { rejectWithValue, dispatch }) => {
    const res = await instance.get(`search.php?f=${elem}`);
    dispatch(Alfavit(res.data.drinks));
  }
);
//? Alfavit ?//

//? Search ?//
export const getSearch = createAsyncThunk(
  "search/getSearch",
  async (elem, { rejectWithValue, dispatch }) => {
    const res = await instance.get(`search.php?s=${elem}`);
    dispatch(Search(res.data.drinks));
  }
);
//? Search ?//

const drinkSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    PopularDrinks: (state, action) => {
      state.popularDrinks = action.payload;
    },
    PopularIngredients: (state, action) => {
      state.popularIngredients = action.payload;
    },
    LatestDrinks: (state, action) => {
      state.latestDrinks = action.payload;
    },
    RandomDrinks: (state, action) => {
      state.randomDrinks = action.payload;
    },
    RandomIngredients: (state, action) => {
      state.randomIngredients = action.payload;
    },
    CoctailInfo: (state, action) => {
      state.coctailInfo = action.payload;
    },
    IngredientInfo: (state, action) => {
      state.ingredientInfo = action.payload;
    },
    Alfavit: (state, action) => {
      state.alfavit = action.payload;
    },
    Search: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const {
  PopularDrinks,
  PopularIngredients,
  LatestDrinks,
  RandomDrinks,
  RandomIngredients,
  CoctailInfo,
  IngredientInfo,
  Alfavit,
  Search,
} = drinkSlice.actions;

export default drinkSlice.reducer;
