import pandas as pd
import matplotlib.pyplot as plt

# reading the database
data = pd.read_csv("het-patel_data-set_featured.csv")

# Scatter plot with day against tip
plt.scatter(data['Year'], data['Crimes_Total'])

# Adding Title to the Plot
plt.title("Scatter Plot")

# Setting the X and Y labels
plt.xlabel('Day')
plt.ylabel('Tip')

plt.show()