<template>
  <nav class="navbar navbar-default">
    <router-link class="navbar-brand" to="/">Stock Trader</router-link>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <router-link class="nav-item" to="/" tag="li" active-class="active" exact>
          <a class="nav-link">Home</a>
        </router-link>

        <router-link class="nav-item" to="/portfolio" tag="li" active-class="active" exact>
          <a class="nav-link">Portfolio</a>
        </router-link>

        <router-link class="nav-item" to="/stocks" tag="li" active-class="active" exact>
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      
      <ul class="nav navbar-nav navbar-right">
        <li><a class="nav-link">End of the day</a></li>
        <li class="dropdown">
          <a href="3" class="dropdown-toggle nav-link" data-toggle="dropdown" role="button"
            aria-haspopup="true" aria-expanded="false">
            Save & load <span class="caret"></span>
          </a>

          <ul class="dropdown-menu">
            <li><a className="nav-link">Save data</a></li>
            <li><a className="nav-link">Load data</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
