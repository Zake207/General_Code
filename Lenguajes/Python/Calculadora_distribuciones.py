from scipy.stats import chi2
from scipy.stats import expon
from scipy.stats import norm
from scipy.stats import t
from scipy.stats import uniform
from scipy.stats import binom
from scipy.stats import poisson
from scipy.stats import geom
from scipy.stats import hypergeom
from scipy.stats import nbinom
from scipy.stats import bernoulli
from scipy.stats import beta
from scipy.stats import gamma
from scipy.stats import f


# Distribución Chi-cuadrado
alpha = float(input("Significancia: "))  # nivel de significancia
df = float(input("Grados de libertad: "))  # número de grados de libertad
critical_value = t.ppf(1 - alpha, df)

print(critical_value)