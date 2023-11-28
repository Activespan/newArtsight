#
from functools import wraps
from time import perf_counter


#
def calc_time(func):
    @wraps(func)
    def time_it(*args, **kwargs):
        start = perf_counter()
        try:
            return func(*args, **kwargs)
        finally:
            end = perf_counter()
            result = end - start
            print("Total execution time: {} seconds".format(result))

    return time_it
