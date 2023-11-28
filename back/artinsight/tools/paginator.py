#
from django.core.paginator import Paginator


#
def get_objects_on_page(objects, obj_counts, page_number):
    paginator = Paginator(objects, obj_counts)
    page_obj = paginator.get_page(page_number)
    return page_obj
