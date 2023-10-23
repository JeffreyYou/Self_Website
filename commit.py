import os
import subprocess

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    # tutorial: https://blog.csdn.net/qq_27825451/article/details/102909772
    # print( subprocess.call(["ls", "-l"], shell=False) )
    subprocess.call("git pull origin main", shell=True)
    message = input("Please enter your git commit message:\n")
    subprocess.call("git add -A", shell=True)
    subprocess.call("git commit -m \"" + message + "\"", shell=True)
    subprocess.call("git push origin main", shell=True)
