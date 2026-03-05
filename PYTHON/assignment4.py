gross_salary = float(input("Enter your Gross Salary (Ksh): "))

if gross_salary < 6000:
    contribution = 150
elif gross_salary < 8000:
    contribution = 300
elif gross_salary < 12000:
    contribution = 400
elif gross_salary < 15000:
    contribution = 500
elif gross_salary < 20000:
    contribution = 600
elif gross_salary < 25000:   
    contribution = 750
elif gross_salary < 30000:
    contribution = 850
elif gross_salary < 50000:
    contribution = 1000
elif gross_salary < 100000:
    contribution = 1500
else:
    contribution = 2000

print(f"Based on a salary of Ksh {gross_salary:,.2f}, your NHIF contribution is Ksh {contribution}")
