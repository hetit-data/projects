import pandas as pd
import matplotlib.pyplot as plt

# reading the database
data = pd.read_csv("het-patel_data-set_featured.csv")

data.plot(x="Crimes_Total", y=[ "Urban_Areas", "Rural_Areas"])



plt.xlabel('year')
plt.ylabel('Crimes')

# Adding the legends
plt.show()


