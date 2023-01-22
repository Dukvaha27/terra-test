import {searchQuetion} from "./actions";

export const questionsReducer = (builder) => {
    builder.addCase(searchQuetion.pending, (state, action) => {
        state.loading = true
        state.error = null
    });
    builder.addCase(searchQuetion.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.questions = action.payload.items;
    });
    builder.addCase(searchQuetion.rejected, (state, action) => {
        state.loading = false;
        state.questions = [];
        state.error = action.payload;
    });
}
