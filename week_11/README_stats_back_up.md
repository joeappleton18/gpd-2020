# Two different types of data 
frame of reference 
case varible organistion
case in row variables in col
variables represent the header 
    - Categorical variables
    - Quantitative variables

# Step 1 Cleaning Data 

- Be Consistent
- Use a consistent fixed code for any missing values (e.g. NA)
- Use consistent varable names 
- Use a consistent format for dates
- Be consistent in naming files 


https://www.tandfonline.com/doi/full/10.1080/00031305.2017.1375989


# Introducing Pandas 

>> Pandas is an open source, BSD-licensed library providing high-performance, easy-to-use data structures and data analysis tools for the Python programming language

planets = pd.read_csv('Planets.csv');


What other types of files can you read?

### Index of the row

```python
planets = pd.read_csv('Planets.csv', index_col=0)
```

Getting an array slice 

```python
planets.loc['MOON': 'PLUTO']
```



## Resources 

[Kaggle has over 20k  of data sets](https://www.kaggle.com/datasets)