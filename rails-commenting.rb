# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# pseudocode:
#  1. create a new blog post
#  2. create a new comment for the blog post

class BlogPostsController < ApplicationController
  def index
    # ---2)
    # pseudocode:
    #   - get all blog posts
    #   - get all comments
    @posts = BlogPost.all
  end

  # ---3)
  # pseudocode:
  #   - get a blog post
  #   - get all comments for that blog post
  
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # pseudocode:
  #   - get a new blog post
  #   - get comments for that blog post

  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # pseudocode:
    # get a new blog post
    # post is valid?
    #   - yes: redirect to blog_post_path
    #   - no: redirect to new_blog_post_path
    # get all comments for that blog post

    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # pseudocode:
    # find a blog post
    # find comments for that blog post

    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # pseudocode:
    # update a blog post
    # update comments for that blog post
    # if update is successful, redirect to blog_post_path
    # if update is not successful, redirect to edit_blog_post_path


    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # pseudocode:
      # if destroy is not successful, redirect to blog_post_path

      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # pseudocode:
  #   - get a blog post
  #   - get all comments for that blog post params

  private
  def blog_post_params
    # ---10)
    # pseudocode:
    #   - get params
    #   - permit blog post attributes
    #   - permit comment attributes
    #  - return params
    
    params.require(:blog_post).permit(:title, :content)
  end
end
