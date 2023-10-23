import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
   {
    title: 'Edit navbar',
       author: 'John',
       assigned_to: 'Robert',
       end_date: '2023-06-19',
       id: 1
   },
   
    {
      
      "title": "Edit Footer",
      "author": "Emily",
      "assigned_to": "Michael",
      "end_date": "2023-06-25",
      "id": 2
    },
    {
      "title": "Update Homepage Banner",
      "author": "Daniel",
      "assigned_to": "Sophia",
      "end_date": "2023-06-30",
      "id": 3
    },
    {
      "title": "Create Product Thumbnails",
      "author": "Ava",
      "assigned_to": "Liam",
      "end_date": "2023-07-05",
      "id": 4
    },
    {
      "title": "Implement User Authentication",
      "author": "Olivia",
      "assigned_to": "Ethan",
      "end_date": "2023-07-10",
      "id": 5
    },
    {
      "title": "Optimize Database Queries",
      "author": "Benjamin",
      "assigned_to": "Chloe",
      "end_date": "2023-07-15",
      "id": 6
    },
    {
      "title": "Design New Logo",
      "author": "Emma",
      "assigned_to": "Liam",
      "end_date": "2023-07-20",
      "id": 7
    },
    {
      "title": "Write Product Descriptions",
      "author": "Sophie",
      "assigned_to": "Ethan",
      "end_date": "2023-07-25",
      "id": 8
    },
    {
      "title": "Test Website Security",
      "author": "Lucas",
      "assigned_to": "Chloe",
      "end_date": "2023-07-30",
      "id": 9
    },
    {
      "title": "Create FAQ Section",
      "author": "Aiden",
      "assigned_to": "Lily",
      "end_date": "2023-08-05",
      "id": 10
    },
    {
      "title": "Translate Website Content",
      "author": "Grace",
      "assigned_to": "Ethan",
      "end_date": "2023-08-10",
      "id": 11
    }
  ],
};

const todoSlice = createSlice({
  name: 'crudSlice',
  initialState,
  reducers: {
    addTask: (state, action) => {
   /*
       ! We check whether the sent element has an id value.
       ? because if an addition is made, the id value of the sent element does not exist.
       ? If an edit has been made, the sent element has an id value.
       */

       // ! It works if the object has an id value:
      if (action.payload.id) {
        const index = state.tasks.findIndex(
          (item) => item.id === action.payload.id
        );

     // we will remove the next element we find 
     // we will add the object that comes with the action instead state.tasks[index] = action.payload;

        return;
      }

   // ! It works if the object has no id value:
    //get the number of objects kept in the store
      const maxId = state.tasks.length + 1;
    // add the id value we found to the object
      action.payload.id = maxId;
      // store update (we add the object to the array in the store)
      state.tasks = [...state.tasks, action.payload];
    },

    removeTask: (state, action) => {
      //Finding the order of the element to be deleted
      const index = state.tasks.findIndex(
        (item) => item.id == action.payload
      );
      //   Removing an element whose order is known from the array
      state.tasks.splice(index, 1);
      //transaction processing speed
      console.log(window.performance.now());
    },
  },
});

export const { addTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;