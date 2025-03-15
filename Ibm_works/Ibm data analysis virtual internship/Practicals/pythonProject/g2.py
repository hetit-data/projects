import pandas as pd
import matplotlib.pyplot as plt

# reading the database
data = pd.read_csv("het-patel_data-set_featured.csv")

# Scatter plot with day against tip
plt.plot(data['Crimes_Total'])
plt.plot(data['Person_Male'])
plt.plot(data['Person_Female'])


# Adding Title to the Plot
plt.title("Scatter Plot")

# Setting the X and Y labels
plt.xlabel('crimes')
plt.ylabel('male || female ')

plt.show()