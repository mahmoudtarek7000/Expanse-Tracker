import React, {ChangeEvent, ReactNode, useState} from 'react';
import { useDispatch } from 'react-redux';

import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    FormControl,
    InputLabel,
    Select,
    MenuItem, SelectChangeEvent
} from '@mui/material';
import {ICategory} from "../../interfaces/Category/ICategory";
import {addCategory} from "../../store/CategorySlice";
import {v4 as uuid} from "uuid";
import {ICategorySelectProps} from "../../interfaces/Category/ICategorySelectProps";

export const CategorySelect: React.FC<ICategorySelectProps> = ({categories, onSelectCategory, selectedCategory}) => {
    const handleCategoryChange = (e: SelectChangeEvent<string>, child: ReactNode) => {
        onSelectCategory(e.target.value);
    }
    const dispatch = useDispatch();
    const [showDialog, setShowDialog] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState('');

    const handleAddCategory = () : void => {
        if (newCategoryName.trim() !== '') {
            const newCategory: ICategory = {
                id: uuid(),
                name: newCategoryName.trim(),
            };
            dispatch(addCategory(newCategory));
            onSelectCategory(newCategory.name);
            setNewCategoryName('');
            setShowDialog(false);
        }
    };

    const handleOpenDialog = () : void=> {
        setShowDialog(true);
    };

    const handleCloseDialog = ():void => {
        setShowDialog(false);
    };
    return (
        <div>
            <FormControl sx={{m:1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                <Select
                    label="Category"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    {categories.map((category, index) => (
                        <MenuItem key={index} value={category.name}>
                            {category.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <div className="m-1">
            <Dialog open={showDialog} onClose={handleCloseDialog}>
                <DialogTitle >Add New Category</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="New Category Name"
                        fullWidth
                        value={newCategoryName}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNewCategoryName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleAddCategory}>Add</Button>
                </DialogActions>
            </Dialog>
            </div>
            <Button onClick={handleOpenDialog}>Add New Category</Button>
        </div>
    );
};


